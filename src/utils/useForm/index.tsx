import { useState } from 'react';

/**
 * A custom hook for managing form state.
 *
 * @template T - The type of the form values. It enforces type safety for the form state.
 * @param {T} initialValue - The initial state of the form as an object with key-value pairs.
 * @returns {[T, (updatedFields: Partial<T>) => void]} - A tuple containing:
 *  - `values`: The current state of the form.
 *  - `updateValues`: A function to update specific fields in the form state.
 */
export const useForm = <T extends Record<string, any>>(initialValue: T) => {
    // Initialize the state with the given initial value
    const [values, setValues] = useState<T>(initialValue);

    /**
     * Updates specific fields in the form state.
     *
     * @param {Partial<T>} updatedFields - An object containing the fields to update with new values.
     */
    const updateValues = (updatedFields: Partial<T>) => {
        setValues((prevValues) => ({
            ...prevValues,          // Keep the existing fields
            ...updatedFields,       // Override only the specified fields
        }));
    };

    // Return the state and update function as a tuple for convenient destructuring
    return [values, updateValues] as const;
};
