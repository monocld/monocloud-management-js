/**
 * The Disable User Request class.
 * @export
 * @interface DisableUserRequest
 */
export interface DisableUserRequest {
  /**
   * Determines whether active sessions should be revoked when disabling the user.
   * @type {boolean}
   * @memberof DisableUserRequest
   */
  revoke_sessions?: boolean;
}
