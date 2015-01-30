// var StarshipRegistration = function(manufacturer, model, value, pilot, location, registeredName) {
// 	this.manufacturer = manufacturer;
// 	this.model = model;
// 	this.value = value;
// 	this.pilot = pilot;
// 	this.location = location;
// 	this.registeredName = registeredName;
// }

var Starship = function(manufacturer, model, value) {
	this.manufacturer = manufacturer;
	this.model = model;
	this.value = value;
}

var StarshipRegistration = function(pilot, location, registeredName, starship) {
	this.pilot = pilot;
	this.location = location;
	this.registeredName = registeredName;
	this.starship = starship;
}

var StarshipFactory = function() {
	var availableStarships = {};

	return {
		createStarship: function(manufacturer, model, value) {
			var starship = availableStarships[model];
			if (!starship) {
				starship = new Starship(manufacturer, model, value);
				availableStarships[model] = starship;
			}
			return starship;
		}
	}
}

var StarshipRegistry = function() {
	var starshipFactory = new StarshipFactory();
	var registry = {};

	return {
		registerStarship: function(manufacturer, model, value, pilot, location, registeredName) {
			var starship = starshipFactory.createStarship(manufacturer, model, value);
			registry[registeredName] = new StarshipRegistration(pilot, location, registeredName, starship);

		},
		generateLocationReport: function() {
			for(var registeredName in registry) {
				var record = registry[registeredName];
				console.log("");
				console.log("Name: " + registeredName);
				console.log("Model: " + record.starship.model);
				console.log("Location: " + record.location);
			}
		},
		updateLocation: function(registeredName, newLocation) {
			var record = registry[registeredName];
			record.location = newLocation;
		},
	}
}

var starshipRegistry = new StarshipRegistry();
starshipRegistry.registerStarship("United Federation of Planets", "Constitution-class", 10000000, "James T. Kirk", "Where no man has gone before", "USS Enterprise (NCC-1701)");
starshipRegistry.registerStarship("United Federation of Planets", "Galaxy-class", 20000000, "Jean-Luc Picard", "Kronos", "USS Enterprise (NCC-1701-D)");
starshipRegistry.registerStarship("Faulcon DeLacy", "Sidewinder Mk. I", 32000, "Toblin", "Sagittarius A", "The Golden Thranta");
starshipRegistry.registerStarship("Faulcon DeLacy", "Sidewinder Mk. I", 32000, "George Branch", "Sagittarius A", "Distinctively Lost");

starshipRegistry.updateLocation("USS Enterprise (NCC-1701-D)", "Earth");
starshipRegistry.generateLocationReport();
