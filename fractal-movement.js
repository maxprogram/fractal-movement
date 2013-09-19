var activities = require('./activities');


// this changes the distributions
// lower = more evenly distributed; 1.325 = 80/20
var activityAlpha = 0.05;
var lengthAlpha = 0.20;

// Returns a random Pareto number
Math.pareto = function(a) {
  a = a || 1;
  return 1 / Math.pow((1 - Math.random()), 1/a);
};

// Returns a random Pareto number between 0 and 1
Math.fractal = function(a) {
  var num = (Math.pareto(a) - 1) / 10;
  if (num > 1) return Math.fractal(a);
  return num;
};


function choose() {
  var rand, activity, unit, spread, distance, digits;

  rand = Math.floor(Math.fractal(activityAlpha) * activities.length);
  activity = activities[rand];
  unit = activity.max ? activity.unit : '';

  spread = (activity.max || 0) - (activity.min || 0);
  rand = Math.fractal(lengthAlpha) * spread;
  digits = activity.digits === undefined ? 1 : activity.digits;
  distance = activity.min + rand;
  distance = distance ? distance.toFixed(digits) : '';

  return [activity.name, distance, unit].join(' ');
}

// Create a schedule for 1 week

var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log('\n');
for (var i in week) {
  console.log(week[i] + ':  ' + choose());
}
console.log('\n\n');



/////////////////////////////
// Test current distribution
//
// Returns a histogram (%'s) with given # of buckets
function distributionTest(buckets) {
  var sum = 0,
      b = [];

  // create buckets
  for (var a=0; a < buckets; a++) b.push(0);

  // trials
  for (var i=0; i < 100000; i++) {
    var num = Math.fractal(),
        ind = Math.floor(num * buckets);
    b[ind]++;
  }
  // sum remaining trials
  for (var x in b) {
    sum += b[x];
  }
  // normalize figures
  for (var y in b) {
    b[y] = (b[y] / sum * 100).toFixed(1);
  }

  return b.join('  ');
}

// console.log(distributionTest(5));
