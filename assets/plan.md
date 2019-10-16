#Busmall

data
Hand-code an array of images with the following attributes:
-
- id
- image (this should be a path)
- name

Create a class for photos with self-incrementing functions for tracking:
-
- views-- the number of times the photo appeared as an option
- votes-- the number of times the photo has been clicked

Initialization: Set the default values for a new survey, initializing the values for views, votes, and totalVotes.

Dynamic layout of survey options: 
Create a page with a dynamically populated flexbox with three radio buttons attached to images laid side by side.

- Add 1 to the timesViewed for each image.
- Implement a duplicate check for the set so that there are no repeated images

When an image is selected:
-
- append +1 to the selected image's votes
- - append +1 to views for all three options
- save the three images to a 'lastThreePhotos' array
- load in a new set of images, filtering out lastThreePhotos.


##Display results on completion:

for each of the photos:
- get the photo's number of votes, views, id and name
- append to results arrary

Then
-
- sort results by number of votes into a filteredResults array, but don't include the options that were never viewed
- Load results screen stub (static elements).
- Append the sorted, filtered results to the table.

(Stretch goal) Store results of each vote and view in localStorage so cumulative results can be tracked. (I'll break this down if I get to this)
