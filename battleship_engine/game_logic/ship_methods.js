module.exports.checkForShip = (player, coordinates) => {
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
		if (shipPresent) return ship;
	}
	return false;
};

module.exports.damageShip = (ship, coordinates) => {
	ship.damage.push(coordinates);
};

module.exports.fire = (player, coordinates) => {
	const ship = this.checkForShip(player, coordinates);
	if (ship) {
		this.damageShip(ship, coordinates);
	}
};
