/**
 * The Reset Password Request.
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   * Specifies whether the reset link should be automatically delivered to the user via email.
   * @type {boolean}
   * @memberof ResetPasswordRequest
   */
  send_email?: boolean;
  /**
   * Lifetime of the reset link in seconds; defaults to system configuration if omitted.
   * @type {number}
   * @memberof ResetPasswordRequest
   */
  expiry?: number | null;
}
