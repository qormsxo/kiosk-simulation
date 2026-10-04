/**
 * Renderer-agnostic building blocks.
 *
 * An elevator or traffic sim can keep this folder and replace `sim/cafe`:
 * - `Rng` fixes a seed so scenarios share the same agents
 * - `moveToward` is the kinematic body (no rendering)
 * - `Fifo` is a capacity-1-or-many waiting line
 * - the cafe engine's `step(dt)` is the pattern for any discrete clock
 *
 * Domain rules (who may board, who yields a lane) stay outside this folder.
 */
export { add, clamp, dist2d, lerp, vec, type Vec3 } from "./vec";
export { mulberry32, type Rng } from "./rng";
export { ARRIVE_DISTANCE, hasArrived, moveToward } from "./movement";
export { Fifo } from "./queue";
