
namespace game {

    export class PlayerMovementSystem extends ut.ComponentSystem {

        private previousInputPosition: Vector3;

        OnUpdate(): void {
            let playerPosition;

            // Move Player
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.PlayerComponent], (position, player) => {
                let deltaX = 0;
                if (ut.Runtime.Input.touchCount() > 0) {
                    const inputPosition = ut.Runtime.Input.getWorldInputPosition(this.world);
                    if (!this.previousInputPosition) {
                        this.previousInputPosition = inputPosition;
                    }
                    const diff = inputPosition.x - this.previousInputPosition.x;
                    if (diff < -0.1) { deltaX = -0.25; }
                    if (diff > 0.1) { deltaX = 0.25; }
                    this.previousInputPosition = inputPosition;
                }
                position.position = position.position.add(new Vector3(deltaX, this.scheduler.deltaTime(), 0));
                playerPosition = position.position;
            });
            // Move Camera
            this.world.forEach([ut.Core2D.TransformLocalPosition, ut.Core2D.Camera2D], (position, camera) => {
                if (playerPosition) {
                    position.position = new Vector3(0, playerPosition.y, 0);
                }
            });
        }
    }
}
