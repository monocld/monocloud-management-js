import { PasswordAlgorithms } from './password-algorithms';

/**
 * The Create User Request class.
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * The username to assign to the user. Must comply with the configured username policy, including format and uniqueness requirements.
   * @type {string}
   * @memberof CreateUserRequest
   */
  username?: string | null;
  /**
   * The user’s email address.
   * @type {string}
   * @memberof CreateUserRequest
   */
  email?: string | null;
  /**
   * Indicates whether the email should be marked as verified when added. If false, verification may be required before the email can be used in login or recovery flows.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  email_verified?: boolean | null;
  /**
   * The phone number to add to the user’s account, provided in E.164 format (e.g., +14085551234).
   * @type {string}
   * @memberof CreateUserRequest
   */
  phone_number?: string | null;
  /**
   * Indicates whether the phone number should be marked as verified when added. If false, verification may be required before the number can be used in login or recovery flows.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  phone_number_verified?: boolean | null;
  /**
   * Plaintext password to assign to the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password?: string | null;
  /**
   * A pre-hashed password value. Useful during migrations to avoid forcing a password reset.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password_hash?: string | null;
  /**
   * The hashing algorithm used for the provided password hash.
   * @type {PasswordAlgorithms}
   * @memberof CreateUserRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Indicates whether the provided password is temporary. If true, the user must reset their password at their next sign-in.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  is_temporary_password?: boolean;
  /**
   * Full name of the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  name?: string | null;
  /**
   * The user\'s given (first) name.
   * @type {string}
   * @memberof CreateUserRequest
   */
  given_name?: string | null;
  /**
   * The user\'s middle name or initial, if applicable.
   * @type {string}
   * @memberof CreateUserRequest
   */
  middle_name?: string | null;
  /**
   * The user\'s family (last) name.
   * @type {string}
   * @memberof CreateUserRequest
   */
  family_name?: string | null;
  /**
   * The user\'s preferred nickname.
   * @type {string}
   * @memberof CreateUserRequest
   */
  nickname?: string | null;
  /**
   * URL of the user’s profile image.
   * @type {string}
   * @memberof CreateUserRequest
   */
  picture?: string | null;
  /**
   * Determines whether configured password policy rules should be bypassed.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * Skips blacklist validation for the provided identifiers.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_identifier_restriction_checks?: boolean;
  /**
   * Bypasses profile validation rules, such as required fields enforced during signup.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_conformance_checks?: boolean;
}
