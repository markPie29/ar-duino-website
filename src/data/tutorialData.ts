export interface ProjectStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TutorialProject {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  colorTheme: 'blue' | 'purple' | 'orange';
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  shortDescription: string;
  fullDescription: string;
  youtubeId: string; // YouTube video ID or embed link
  duration: string;
  hardware: string[];
  steps: ProjectStep[];
  cppCode: string;
  gradient: string;
  accentColor: string;
}

export const TUTORIAL_PROJECTS: TutorialProject[] = [
  {
    id: 'blinking-led',
    title: 'Blinking LED',
    difficulty: 'Easy',
    colorTheme: 'blue',
    badgeBg: 'bg-[#35A2F4]/15',
    badgeText: 'text-[#35A2F4]',
    badgeBorder: 'border-[#35A2F4]/40',
    shortDescription: 'The classic Hello World of electronics. Learn digital output, timing, and circuit loops on Arduino.',
    fullDescription: 'This tutorial walks you through setting up your first basic Arduino circuit. You will connect an LED to digital pin 13 with a current-limiting resistor and write C++ code to turn it ON and OFF in a continuous 1-second loop.',
    youtubeId: 'g0pSfyXOXj8', // Standard Arduino tutorial reference video
    duration: '4:15',
    hardware: [
      'Arduino Uno R3',
      '5mm Red LED',
      '220Ω Resistor',
      'Breadboard',
      '2x Jumper Wires'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Insert the LED into the Breadboard',
        description: 'Place the LED long leg (anode +) into row 10 and the short leg (cathode -) into row 11.'
      },
      {
        stepNumber: 2,
        title: 'Connect the Current Limiting Resistor',
        description: 'Connect one leg of a 220Ω resistor to row 11 (cathode) and the other leg to the negative ground rail (-).'
      },
      {
        stepNumber: 3,
        title: 'Wire up to Arduino Pins',
        description: 'Connect a jumper wire from Arduino Pin 13 to row 10 (anode), and connect Arduino GND to the negative ground rail.'
      },
      {
        stepNumber: 4,
        title: 'Upload C++ Code',
        description: 'Open the Arduino IDE, paste the provided code snippet, select your board port, and click Upload.'
      }
    ],
    cppCode: `// Project 1: Blinking LED (Easy)
// AR-DUINO Interactive Guide

const int LED_PIN = 13; // Digital pin 13 connected to LED anode

void setup() {
  // Initialize digital pin 13 as an output pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH); // Turn the LED ON
  delay(1000);                  // Wait for 1 second (1000ms)
  digitalWrite(LED_PIN, LOW);  // Turn the LED OFF
  delay(1000);                  // Wait for 1 second (1000ms)
}`,
    gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    accentColor: '#35A2F4'
  },
  {
    id: 'potentiometer-control',
    title: 'Potentiometer Control',
    difficulty: 'Medium',
    colorTheme: 'purple',
    badgeBg: 'bg-[#9B5FF5]/15',
    badgeText: 'text-[#9B5FF5]',
    badgeBorder: 'border-[#9B5FF5]/40',
    shortDescription: 'Master analog input and PWM output. Control LED brightness smoothly using a rotary knob.',
    fullDescription: 'Learn how to read variable analog signals (0 to 1023) from a 10k potentiometer knob on pin A0 and convert them to 8-bit Pulse Width Modulation (PWM 0 to 255) to adjust LED brightness dynamically.',
    youtubeId: '3X6h7jI2P50', // Standard potentiometer video reference
    duration: '6:30',
    hardware: [
      'Arduino Uno R3',
      '10k Potentiometer',
      '5mm LED',
      '220Ω Resistor',
      'Breadboard',
      '5x Jumper Wires'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Place Potentiometer on Breadboard',
        description: 'Plug the 3-pin potentiometer across rows on the breadboard.'
      },
      {
        stepNumber: 2,
        title: 'Power and Ground Connections',
        description: 'Connect the outer left pin to Arduino 5V and outer right pin to GND rail.'
      },
      {
        stepNumber: 3,
        title: 'Connect Analog Input Signal',
        description: 'Wire the middle wiper pin of the potentiometer to Arduino Analog Pin A0.'
      },
      {
        stepNumber: 4,
        title: 'Wire PWM Output LED',
        description: 'Connect LED anode through a 220Ω resistor to PWM Pin 9 (~), and cathode to GND.'
      }
    ],
    cppCode: `// Project 2: Potentiometer LED Brightness Control (Medium)
// AR-DUINO Interactive Guide

const int POT_PIN = A0;  // Analog pin A0 for potentiometer wiper
const int LED_PIN = 9;   // PWM digital pin 9 for LED brightness

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600); // Initialize serial telemetry
}

void loop() {
  int potValue = analogRead(POT_PIN);              // Read 0 to 1023 analog value
  int brightness = map(potValue, 0, 1023, 0, 255); // Map to 0-255 PWM duty cycle

  analogWrite(LED_PIN, brightness); // Output variable voltage signal

  Serial.print("Analog: ");
  Serial.print(potValue);
  Serial.print(" | Brightness: ");
  Serial.println(brightness);

  delay(15); // Smooth loop delay
}`,
    gradient: 'from-purple-600/20 via-indigo-500/10 to-transparent',
    accentColor: '#9B5FF5'
  },
  {
    id: 'led-patterns',
    title: 'LED Patterns & Chaser',
    difficulty: 'Medium',
    colorTheme: 'purple',
    badgeBg: 'bg-[#9B5FF5]/15',
    badgeText: 'text-[#9B5FF5]',
    badgeBorder: 'border-[#9B5FF5]/40',
    shortDescription: 'Build multi-LED array animations, Knight Rider scanner effects, and sequential pin loops.',
    fullDescription: 'Explore digital output arrays, nested C++ loops, and dynamic sequencing by building a 5-LED light chaser array. Great for practicing array iteration and pattern algorithms.',
    youtubeId: '9o73z2gC70k', // Standard LED array pattern reference video
    duration: '8:45',
    hardware: [
      'Arduino Uno R3',
      '5x 5mm LEDs (Various Colors)',
      '5x 220Ω Resistors',
      'Breadboard',
      '7x Jumper Wires'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Align LED Array on Breadboard',
        description: 'Place 5 LEDs in a row on the breadboard, ensuring all long legs (anodes) face left.'
      },
      {
        stepNumber: 2,
        title: 'Add Resistors for Each LED',
        description: 'Attach a 220Ω resistor from each cathode (-) to the common ground rail.'
      },
      {
        stepNumber: 3,
        title: 'Connect Arduino Pins 2 through 6',
        description: 'Wire digital pins 2, 3, 4, 5, and 6 to each respective LED anode (+).'
      },
      {
        stepNumber: 4,
        title: 'Flash Animation Code',
        description: 'Upload the C++ array loop script to run forward and reverse light scanning patterns.'
      }
    ],
    cppCode: `// Project 3: LED Pattern Chaser Array (Medium)
// AR-DUINO Interactive Guide

const int ledPins[] = {2, 3, 4, 5, 6}; // Array of digital pins connected to LEDs
const int numLeds = 5;
const int speedDelay = 80; // Speed of animation in milliseconds

void setup() {
  for (int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT); // Set all array pins as OUTPUT
  }
}

void loop() {
  // Scan forward: Pin 2 to Pin 6
  for (int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(speedDelay);
    digitalWrite(ledPins[i], LOW);
  }

  // Scan reverse: Pin 5 down to Pin 3
  for (int i = numLeds - 2; i > 0; i--) {
    digitalWrite(ledPins[i], HIGH);
    delay(speedDelay);
    digitalWrite(ledPins[i], LOW);
  }
}`,
    gradient: 'from-purple-600/20 via-pink-500/10 to-transparent',
    accentColor: '#9B5FF5'
  },
  {
    id: 'rc-car',
    title: 'RC Car & Motor Control',
    difficulty: 'Hard',
    colorTheme: 'orange',
    badgeBg: 'bg-[#FC904F]/15',
    badgeText: 'text-[#FC904F]',
    badgeBorder: 'border-[#FC904F]/40',
    shortDescription: 'Build a full dual-motor robot chassis with L298N motor driver, direction logic, and PWM speed.',
    fullDescription: 'An advanced robotics project integrating an L298N H-Bridge dual DC motor controller with an Arduino Uno to build a remote/autonomous 2-wheel drive RC chassis capable of forward, reverse, and skid-steering control.',
    youtubeId: '1bV_qgV-5H4', // Standard RC Car L298N motor driver reference video
    duration: '14:20',
    hardware: [
      'Arduino Uno R3',
      'L298N Dual H-Bridge Motor Driver',
      '2x 5V DC Gear Motors & Wheels',
      '7.4V Li-Ion Battery Pack',
      'Smart Car Chassis Kit',
      'Male-to-Female Jumper Wires'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Assemble Motors on Chassis',
        description: 'Mount the dual DC motors and wheels to the acrylic car chassis using screws and brackets.'
      },
      {
        stepNumber: 2,
        title: 'Wire Motors to L298N Terminals',
        description: 'Connect Left Motor wires to OUT1/OUT2 and Right Motor wires to OUT3/OUT4 terminals.'
      },
      {
        stepNumber: 3,
        title: 'Wire Logic Control Signals',
        description: 'Connect IN1, IN2, IN3, IN4 pins of L298N to Arduino digital pins 4, 5, 6, 7 and PWM ENA/ENB pins to 9 and 10.'
      },
      {
        stepNumber: 4,
        title: 'Connect Power & Test Motion Logic',
        description: 'Connect 7.4V battery to L298N 12V terminal, share common GND with Arduino, and upload steering script.'
      }
    ],
    cppCode: `// Project 4: RC Car Motor Driver Logic (Hard)
// AR-DUINO Interactive Guide

// L298N Motor Driver Pins
const int IN1 = 4; // Left Motor direction 1
const int IN2 = 5; // Left Motor direction 2
const int IN3 = 6; // Right Motor direction 1
const int IN4 = 7; // Right Motor direction 2

const int ENA = 9;  // Left Motor PWM speed (Pin 9 ~)
const int ENB = 10; // Right Motor PWM speed (Pin 10 ~)

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
}

void moveForward(int speedVal) {
  analogWrite(ENA, speedVal);
  analogWrite(ENB, speedVal);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void turnLeft(int speedVal) {
  analogWrite(ENA, speedVal);
  analogWrite(ENB, speedVal);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH); // Reverse left wheel
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void stopCar() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void loop() {
  moveForward(200); // Move forward at ~80% power
  delay(3000);
  
  turnLeft(180);    // Skid turn left
  delay(1200);
  
  stopCar();
  delay(2000);
}`,
    gradient: 'from-orange-600/20 via-amber-500/10 to-transparent',
    accentColor: '#FC904F'
  }
];
