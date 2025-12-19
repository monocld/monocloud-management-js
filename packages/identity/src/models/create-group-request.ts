/**
 * The Create Group Request class.
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * The display name of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  name: string;
  /**
   * Optional description that indicates the purpose or role of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  description?: string | null;
  /**
   * Indicates whether new users are automatically assigned to this group upon sign-up.
   * @type {boolean}
   * @memberof CreateGroupRequest
   */
  is_auto_assigned?: boolean;
}
