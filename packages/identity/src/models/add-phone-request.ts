/**
 * The Add Phone Request.
 * @export
 * @interface AddPhoneRequest
 */
export interface AddPhoneRequest {
  /**
   * The phone number to add to the user’s account, provided in E.164 format (e.g., +14085551234).
   * @type {string}
   * @memberof AddPhoneRequest
   */
  phone_number: string;
  /**
   * Indicates whether the phone number should be marked as verified when added. If false, verification may be required before the number can be used in login or recovery flows.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  is_verified?: boolean;
  /**
   * Skips blacklist validation for the provided number.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  skip_restriction_checks?: boolean;
}
