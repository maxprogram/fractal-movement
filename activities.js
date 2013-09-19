// LIST OF ACTIVITIES
//
// Ranked from least to most difficult: 'Difficulty' means whatever
// you want it to. Biking is a pain for me so I make it last.
//
// name   (required)        name of the activity
// unit   (default: '')     plural unit of measurement
// min    (default: 0)      minimum length
// max    (default: 0)      maximum length
// digits (default: 1)      # of digits to round to

module.exports = [
  {
    name: '---', // 'do nothing'
  },
  {
    name: 'Tai Chi',
  },
  {
    name: 'Walking',
    unit: 'miles',
    min: 1,
    max: 4
  },
  {
    name: 'Natural movement',
    unit: 'minutes',
    min: 30,
    max: 120,
    digits: 0
  },
  {
    name: 'Hiking',
    unit: 'miles',
    min: 2,
    max: 12
  },
  {
    name: 'Running',
    unit: 'miles',
    min: 0.5,
    max: 6
  },
  {
    name: 'Swimming',
    unit: 'laps',
    min: 3,
    max: 8,
    digits: 0
  },
  {
    name: 'Biking',
    unit: 'miles',
    min: 5,
    max: 15,
    digits: 0
  }
];
