/**
 * Stalker API
 * API di Stalker di Imola Informatica sviluppato da qbteam
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: qbteamswe@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Movement } from './movement';


/**
 * Movement to a place of an organization made with the anonymous trackingMode.
 */
export interface PlaceAnonymousMovement extends Movement { 
    /**
     * Unique identifier of the place in which the user had access.
     */
    placeId: number;
}
export namespace PlaceAnonymousMovement {
}


