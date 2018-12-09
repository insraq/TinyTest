
namespace game {

    /* Camera fixed width = halfHorizontalSize */
    export class CameraFitSystem extends ut.ComponentSystem {

        static halfHorizontalSize: number = 10;

        OnUpdate(): void {
            this.world.forEach([ut.Core2D.Camera2D], (camera) => {
                const displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
                camera.halfVerticalSize = CameraFitSystem.halfHorizontalSize * displayInfo.height / displayInfo.width;
            });
        }
    }
}
