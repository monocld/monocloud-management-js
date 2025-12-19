/**
 * The Add Email Request.
 * @export
 * @interface AddEmailRequest
 */
export interface AddEmailRequest {
  /**
   * The email address to add to the user’s account.
   * @type {string}
   * @memberof AddEmailRequest
   */
  email: string;
  /**
   * Indicates whether the email should be marked as verified when added. If false, verification may be required before the email can be used in login or recovery flows.
   * @type {boolean}
   * @memberof AddEmailRequest
   */
  is_verified?: boolean;
  /**
   * Skips blacklist validation for the provided email.
   * @type {boolean}
   * @memberof AddEmailRequest
   */
  skip_restriction_checks?: boolean;
}
