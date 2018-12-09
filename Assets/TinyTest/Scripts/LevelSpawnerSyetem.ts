
namespace game {

    export class LevelSpawnerSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([ut.Entity, game.LevelsComponent], (entity, levels) => {

            });
        }
    }
}
