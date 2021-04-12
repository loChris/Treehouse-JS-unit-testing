const shipMethods = {
	checkForShip: function (player, coordinates) {
		let shipPresent;
		let ship;

		for (let i in player.ships) {
			ship = player.ships[i];
			shipPresent = ship.locations.filter((actualCoordinate) => {
				return (
					actualCoordinate[0] === coordinates[0] &&
					actualCoordinate[1] === coordinates[1]
				);
			})[0];
			if (shipPresent) return true;
		}
		return false;
	},
	damageShip: function (ship, coordinates) {
		ship.damage.push(coordinates);
	},
};

module.exports.shipMethods = shipMethods;
