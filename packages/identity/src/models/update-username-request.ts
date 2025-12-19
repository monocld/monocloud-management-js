/**
 * The Update Username Request.
 * @export
 * @interface UpdateUsernameRequest
 */
export interface UpdateUsernameRequest {
  /**
   * The username to assign to the user. Must comply with the configured username policy, including format and uniqueness requirements.
   * @type {string}
   * @memberof UpdateUsernameRequest
   */
  username: string;
}
