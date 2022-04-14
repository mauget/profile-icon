
const getHash =  (initials, hashSize) =>   (initials.charCodeAt(0)*256 + initials.charCodeAt(1)) % hashSize;

const COLORS = [
   // Dimension is a prime
   ['#339', '#900'], // 0
   ['#006', '#9ff'],
   ['#FF3', '#399'],
   ['#FF3', '#333'],
   ['orange', 'white'], // 4
   ['#00F', '#FFF'],
   ['darkcyan', 'white '], // 6
   ['#993', '#3FF'],
   ['#FFF', '#F00'],
   ['#660', '#0FF'],
   ['#996', '#666'],
]
function getProfileColors(initials) {
   return COLORS[getHash(initials, COLORS.length)];
}
export default getProfileColors
