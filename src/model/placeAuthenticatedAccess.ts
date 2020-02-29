/**
 * Stalker API
 * API di Stalker di Imola Informatica sviluppato da qbteam
 *
 * OpenAPI spec version: 1.0.0
 * Contact: qbteamswe@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Access } from './access';

/**
 * Access to a place of an organization made with the authenticated trackingMode.
 */
export interface PlaceAuthenticatedAccess { 
    access: Access;
    /**
     * Unique identifier of the place in which the user had access.
     */
    placeId: number;
    /**
     * Organization LDAP server's user unique identifier.
     */
    ldapId: number;
}