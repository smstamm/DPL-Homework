var skiLocation = prompt("It just dumped a foot of fresh powder. Where are you skiing today? The resort, the backcountry, or are you considering sitting this one out? (Resort, Backcountry, or Sitting Out)").toLowerCase();

switch(skiLocation) {
    case "resort":
        var expLevel = prompt("What's your experience level? (Noob, Intermediate or Expert)").toLowerCase();
        var terrain = prompt("Are you skiing trees or groomed runs? (Trees or Runs)").toLowerCase();
        if (expLevel === "noob" && terrain === "trees") {
          alert("You crashed into a tree and died.");
        }
        else if (expLevel === "noob" && terrain === "runs") {
          alert("Go shred the gnar!");
        }
        else if ((expLevel === "intermediate" || expLevel === "expert") && terrain === "trees") {
          alert("Be careful!");
        }
        else {
          alert("If you're bored, try going out of bounds!");
        }
        break;
    case "backcountry":
        var expLevel = prompt("What's your experience level? (Noob, Intermediate or Expert)").toLowerCase();
        var terrain = prompt("Are you skiing trees or bowls? (Trees or Bowls)").toLowerCase();
        if (expLevel === "noob" && (terrain === "trees" || terrain === "bowls")) {
          alert("You got caught in an avalanche and died.");
        }
        else if ((expLevel === "intermediate" || expLevel === "expert") && terrain === "trees") {
          alert("Be careful out there!");
        }
        else {
          alert("You better check the avy report!");
        }
        break;
    case "sitting out":
        var wife = prompt("Does your wife have a lot for you to do? (Yes or No)").toLowerCase();
        var tuned = prompt("Are your skis tuned? (Yes or No)").toLowerCase();
        if (wife === "yes" && tuned === "no") {
          alert("Next time, bro");
        }
        else if (wife === "yes" && tuned === "yes") {
          alert("'Tis better to ask for forgiveness");
        }
        else if (wife === "no" && tuned === "yes") {
          alert("Get out of here already!");
        }
        else {
          alert("There is probably something good on HGTV");
        }
        break;
    default: 
      alert("That's not a valid value, dummy!");
    }