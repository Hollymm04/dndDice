import random
import sys

def roll_die(sides):
    return random.randint(1, sides)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: No die type provided")
        sys.exit(1)
    try:
        sides = int(sys.argv[1])
        print(roll_die(sides))
    except ValueError:
        print("Error: Invalid die type")
        sys.exit(1)

        