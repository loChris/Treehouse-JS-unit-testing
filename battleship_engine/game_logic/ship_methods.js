const checkForShip = (player, coordinates) => {
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
};

module.exports.checkForShip = checkForShip;
