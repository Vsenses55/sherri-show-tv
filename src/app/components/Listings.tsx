type ListingData = {
  id: string;
  location: string;
  station: string;
  time: string;
  state: string;
};

type ListingsProps = {
  data?: ListingData[];
};

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center size-full">
      <div className="content-stretch flex flex-col items-start justify-center px-[16px] sm:px-[40px] relative size-full">
        {children}
      </div>
    </div>
  );
}

type Field2Props = {
  additionalClassNames?: string;
  text: string;
};

function Field2({ additionalClassNames = "", text }: React.PropsWithChildren<Field2Props>) {
  return (
    <div className={`h-[64px] justify-self-stretch relative shrink-0 ${additionalClassNames}`}>
      <Wrapper>
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[14px] sm:text-[18px] uppercase">
            {text}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

type FieldProps = {
  additionalClassNames?: string;
  text: string;
};

function Field({ additionalClassNames = "", text }: FieldProps) {
  return (
    <div className={`h-[64px] justify-self-stretch relative shrink-0 ${additionalClassNames}`}>
      <div
        aria-hidden="true"
        className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none"
      />
      <Wrapper>
        <TypeScaleText text={text} />
      </Wrapper>
    </div>
  );
}

type TypeScaleTextProps = {
  text: string;
};

function TypeScaleText({ text }: TypeScaleTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#222] text-[14px] sm:text-[16px]">
        {text}
      </p>
    </div>
  );
}

const defaultData: ListingData[] = [
  { id: "1", location: "Birmingham", station: "WVTM", time: "2pm, M-F", state: "ALABAMA" },
  { id: "2", location: "Mobile", station: "WKRG", time: "2pm, M-F", state: "ALABAMA" },
  { id: "3", location: "Montgomery", station: "WSFA", time: "2pm, M-F", state: "ALABAMA" },
  { id: "4", location: "Huntsville", station: "WAFF", time: "2pm, M-F", state: "ALABAMA" },
  { id: "5", location: "Phoenix", station: "KTVK", time: "3pm, M-F", state: "ARIZONA" },
  { id: "6", location: "Tucson", station: "KGUN", time: "3pm, M-F", state: "ARIZONA" },
  { id: "7", location: "Los Angeles", station: "KTLA", time: "1pm, M-F", state: "CALIFORNIA" },
  { id: "8", location: "San Diego", station: "KGTV", time: "1pm, M-F", state: "CALIFORNIA" },
  { id: "9", location: "San Francisco", station: "KGO", time: "1pm, M-F", state: "CALIFORNIA" },
  { id: "10", location: "Denver", station: "KMGH", time: "2pm, M-F", state: "COLORADO" },
  { id: "11", location: "Miami", station: "WPLG", time: "3pm, M-F", state: "FLORIDA" },
  { id: "12", location: "Tampa", station: "WFLA", time: "3pm, M-F", state: "FLORIDA" },
  { id: "13", location: "Atlanta", station: "WSB", time: "2pm, M-F", state: "GEORGIA" },
];

export function Listings({ data = defaultData }: ListingsProps) {
  // Group data by state
  const groupedData: { [key: string]: ListingData[] } = {};
  data.forEach((item) => {
    if (!groupedData[item.state]) {
      groupedData[item.state] = [];
    }
    groupedData[item.state].push(item);
  });

  return (
    <div className="content-stretch flex flex-col gap-[20px] sm:gap-[40px] items-start relative size-full">
      <div className="bg-white max-w-full relative rounded-[8px] shrink-0 w-full overflow-x-auto">
        <div className="flex flex-col min-w-[600px] overflow-clip relative rounded-[inherit] w-full">
          {/* Header Row */}
          <div className="grid grid-cols-[minmax(0,1.20fr)_minmax(0,0.75fr)_minmax(0,0.75fr)] h-[64px]">
            <Field2 additionalClassNames="col-1" text="LOCATION" />
            <Field2 additionalClassNames="col-2" text="STATION" />
            <Field2 additionalClassNames="col-3" text="TIME" />
          </div>

          {/* Data Rows */}
          {Object.keys(groupedData)
            .sort()
            .map((state) => (
              <div key={state}>
                {/* State Header */}
                <div className="grid grid-cols-[minmax(0,1.20fr)_minmax(0,0.75fr)_minmax(0,0.75fr)]">
                  <Field2 additionalClassNames="bg-[#f4f4f4] col-[1/span_3]" text={state} />
                </div>

                {/* State Data Rows */}
                {groupedData[state].map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[minmax(0,1.20fr)_minmax(0,0.75fr)_minmax(0,0.75fr)] h-[64px]"
                  >
                    <Field additionalClassNames="col-1" text={item.location} />
                    <Field additionalClassNames="col-2" text={item.station} />
                    <Field additionalClassNames="col-3" text={item.time} />
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]"
        />
      </div>
    </div>
  );
}