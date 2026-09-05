import { useState } from "react";
import { FormField } from "@/app/components/FormField";
import { SubmitButton } from "@/app/components/SubmitButton";

export function InteractiveFormExample() {
  const [showName, setShowName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (showName.trim() === "") {
      setError("This field is required");
      setIsSubmitted(false);
    } else if (showName !== "Sherri Show") {
      setError("Please enter 'Sherri Show'");
      setIsSubmitted(false);
    } else {
      setError("");
      setIsSubmitted(true);
    }
  };

  const handleChange = (value: string) => {
    setShowName(value);
    if (error) {
      setError("");
    }
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Show Name"
        placeholder="Enter show name"
        value={showName}
        onChange={handleChange}
        required
        showInfo
        error={error}
        helperText={
          isSubmitted
            ? "✓ Success! You entered the correct show name."
            : error || "Enter 'Sherri Show' to see validation in action"
        }
      />
      
      <SubmitButton onClick={handleSubmit} />
      
      {isSubmitted && (
        <div className="p-4 bg-[#d1f4e0] border border-[#52c793] rounded-lg">
          <p className="text-sm text-[#0d7a48] font-medium">
            ✓ Form submitted successfully! You typed: <strong>{showName}</strong>
          </p>
        </div>
      )}
    </div>
  );
}