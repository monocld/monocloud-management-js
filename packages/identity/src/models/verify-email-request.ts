/**
 * The Verify Email Request.
 * @export
 * @interface VerifyEmailRequest
 */
export interface VerifyEmailRequest {
  /**
   * Lifetime of the verification link in seconds; defaults to system configuration if omitted.
   * @type {number}
   * @memberof VerifyEmailRequest
   */
  expiry?: number | null;
}
