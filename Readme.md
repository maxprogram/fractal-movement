# Fractal Movement

A Node.js library that selects an activity (or a list of activities) to do based on fractal (Pareto) distribution.

The distribution puts about 50% of the results in the bottom (easiest) 20% of the activities. So if you have 5 activities, about half the time you'll be doing the easiest one.

To use on the command line, just run `node fractal-movement` in the repo folder. You'll get a list of random activities to do for the week like this:

```
Mon:  Natural movement 39 minutes
Tue:  Tai Chi
Wed:  Running 4.5 miles
Thu:  Running 5.1 miles
Fri:  ---
Sat:  Hiking 6.9 miles
Sun:  Biking 7 miles
```

You can define your list of activities in the JSON object located in `activities.js`. Feel free to make them as crazy as you want: base jumping, free soloing, wingsuiting, shuffleboard, etc.

### Background:

Many studies (see Art de Vany or Nassim Taleb) have shown that people not living a "modern" lifestyle -- i.e. hunter-gatherers -- move and expend energy in a fractal pattern. Most of the time they're not expending much energy sitting, slow walking, or doing everyday tasks; sometimes they lift heavy things or use their whole bodies for more intense play; and on occasion they put in an all-out effort short-distance sprinting or long-distance running.

Hunter-grathers don't *choose* to move fractally, that's just how it ends up. But the modern lifestyle has routinized everything and put if on a more even distribution. Running 3 miles a day may drop some pounds, but it's not very good for you long-term.

Better to have a diversity of full-body activities that are only on-occasion very difficult. This little program should help out to force some randomness in your schedule.

+1 for diversty! -1 for specialization!

### Future:

* Command-line utility
