import { GroupTypes } from './group-types';

/**
 * The Group response class
 * @export
 * @interface Group
 */
export interface Group {
  /**
   * Unique identifier of the group.
   * @type {string}
   * @memberof Group
   */
  group_id: string;
  /**
   * Defines the type of the group: either `custom` or `built-in`.
   * @type {GroupTypes}
   * @memberof Group
   */
  type: GroupTypes;
  /**
   * The display name of the group.
   * @type {string}
   * @memberof Group
   */
  name: string;
  /**
   * Optional description that indicates the purpose or role of the group.
   * @type {string}
   * @memberof Group
   */
  description?: string | null;
  /**
   * Indicates whether new users are automatically assigned to this group upon sign-up.
   * @type {boolean}
   * @memberof Group
   */
  is_auto_assigned: boolean;
  /**
   * Number of users currently assigned to the group.
   * @type {number}
   * @memberof Group
   */
  users_assigned: number;
  /**
   * Number of client applications associated with the group.
   * @type {number}
   * @memberof Group
   */
  clients_assigned: number;
  /**
   * Timestamp (Unix epoch) representing when the group was created.
   * @type {number}
   * @memberof Group
   */
  creation_time: number;
  /**
   * Timestamp (Unix epoch) representing when the group was most recently updated.
   * @type {number}
   * @memberof Group
   */
  last_updated: number;
  /**
   * Timestamp (Unix epoch) representing the most recent assignment event for a user or client application.
   * @type {number}
   * @memberof Group
   */
  last_assigned: number;
}
