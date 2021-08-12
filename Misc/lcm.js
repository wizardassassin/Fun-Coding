const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const lcd = (a, b) => Math.abs(a * b) / gcd(a, b);

const lcm = (nums) =>
    lcd(nums[0] ?? 0, nums[2] ? lcm(nums.slice(1)) : nums[1] ?? nums[0] ?? 0);
