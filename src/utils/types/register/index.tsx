export interface RegisterPayload {
    fullName: string;
    job: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    status: string; // Status code as a string
    message: string; // High-level message about the response
    data: {
      message: string; // Detailed success message
    };
}
