import { dist2d, type Vec3 } from "./vec";

export const ARRIVE_DISTANCE = 0.16;

/**
 * Straight-line kinematic step. Agents never teleport.
 * A path is an ordered list of these targets; the cafe model
 * rebuilds the current target when the queue or stage changes.
 */
export function moveToward(position: Vec3, target: Vec3, speed: number, dt: number): boolean {
  const dx = target.x - position.x;
  const dz = target.z - position.z;
  const dist = Math.hypot(dx, dz);
  if (dist <= ARRIVE_DISTANCE) {
    position.x = target.x;
    position.z = target.z;
    return true;
  }
  const step = Math.min(dist, Math.max(0, speed) * dt);
  position.x += (dx / dist) * step;
  position.z += (dz / dist) * step;
  return dist - step <= ARRIVE_DISTANCE;
}

export function hasArrived(position: Vec3, target: Vec3): boolean {
  return dist2d(position, target) <= ARRIVE_DISTANCE;
}
