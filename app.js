(function(){
var app = angular.module('store', [ ]);
app.controller('StoreController', function(){
   this.products = gems;
});

var gems = [
   {
      name: "Dodecahedron",
      price: 21.00,
      description: "One dose and gravity is all nonsense. oppressive forces that flicker in and out of view like ambassadors from the kind of non-Euclidean occult geometries that drive people insane in H. P. Lovecraft's short stories.",
      images: [
         {
            full: 'Dodecahedron-full.jpg',
            thumb: 'Dodecahedron-thumb.jpg'
         },
      ]
   },
   {
      name: "Tetrahedron",
      price: 44.05,
      description: "Increased neural distribution and broader gamma waves. Three doses are all you need to enhanced IQ.",
      images: [
         {
            full: 'Tetrahedron-full.jpg',
            thumb: 'Tetrahedron-thumb.jpg'
         },
      ]
   },
   {
      name: "Pyrophosphate",
      price: 37.99,
      description: "Illegal in 49 States. Synthesized from the bowels of Cherynobyl's quarantine zone. Potent and very effective.",
      images: [
         {
            full: 'Pyrophosphate-full.jpg',
            thumb: 'Pyrophosphate-thumb.jpg'
         },
      ]
   },
   {
      name: "Modafinale",
      price: 222.95,
      description: "Prescription quality available without a prescription. A fusion of nootropics ready for the next-generation of cerebral cocktails.",
      images: [
         {
            full: 'Modafinale-full.jpg',
            thumb: 'Modafinale-thumb.jpg'
         },
      ]
   },
];
})();
