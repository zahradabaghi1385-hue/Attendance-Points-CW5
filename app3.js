import {affordableVisits} from "./app2.js";
import {attendancePoints} from "./app.js";

function reservationStatus(requestedVisits, availableVisits) {
    // requestedVisits validity check
    if (!Number.isInteger(requestedVisits) || requestedVisits > 10000 || requestedVisits < 0) {
        return null;
    }
    // availableVisits validity check
    if (!Number.isInteger(availableVisits) || availableVisits > 10000 || availableVisits < 0) {
        return null;
    }

    if (requestedVisits === 0) {
        return ("no-request");
    } else if (requestedVisits > 0 && requestedVisits <= availableVisits) {
        return ("accepted");
    } else if (requestedVisits > 0 && requestedVisits > availableVisits) {
        return ("insufficient-credit");
    }
}


console.log(reservationStatus(0, 0));
console.log(reservationStatus(2, 2));
console.log(reservationStatus(3, 2));
console.log(reservationStatus(-1, 2));
console.log(reservationStatus(1.5, 2));


console.log(`availableVisits: ${affordableVisits(11, 4)}`);
console.log(`reservationStatus: ${reservationStatus(3, affordableVisits(11, 4))}`);
console.log(`attendancePoints: ${attendancePoints(3)}`);

