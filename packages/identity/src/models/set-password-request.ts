import { PasswordAlgorithms } from './password-algorithms';

/**
 * The Set Password Request class.
 * @export
 * @interface SetPasswordRequest
 */
export interface SetPasswordRequest {
  /**
   * Plaintext password to assign to the user.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password?: string | null;
  /**
   * A pre-hashed password value. Useful during migrations to avoid forcing a password reset.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password_hash?: string | null;
  /**
   * The hashing algorithm used for the provided password hash.
   * @type {PasswordAlgorithms}
   * @memberof SetPasswordRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Indicates whether the provided password is temporary. If true, the user must reset their password at their next sign-in.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  is_temporary_password?: boolean;
  /**
   * Determines whether configured password policy rules should be bypassed.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * Determines whether active sessions should be revoked after updating the password.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  revoke_sessions?: boolean;
}
