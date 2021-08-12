/*
Ordered fractions

Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.

https://projecteuler.net/problem=71

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

/*
Additional Resources(These Problems are Starting to get Hard):
Broad: https://en.wikipedia.org/wiki/Farey_sequence
Specific: https://en.wikipedia.org/wiki/Farey_sequence#Farey_neighbours
*/

export default function problem71(n = 1000000) { // Could substitute 3 and 7 for num and den
    while (n)
        if (Number.isInteger((3 * n-- - 1) / 7))
            return (3 * ++n - 1) / 7;
}

/*
L a1=(n*d1-1)/d n/d R a2=(d*d2+1)/n (doesn't work) (maximize d1 d2)
*/