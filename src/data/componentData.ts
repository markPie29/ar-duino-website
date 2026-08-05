export interface ArduinoComponent {
  id: string;
  name: string;
  category: 'Input' | 'Output' | 'Sensors' | 'Core';
  description: string;
  functionality: string;
  image: string; // URL or local path placeholder
  gradient: string;
  accentColor: string;
  iconName: string;
}

export const ARDUINO_COMPONENTS: ArduinoComponent[] = [
  {
    id: 'arduino-uno',
    name: 'Arduino Uno R3',
    category: 'Core',
    description: 'The standard microcontroller board based on the ATmega328P.',
    functionality: 'Acts as the brain of your electronic projects, receiving inputs from sensors and controlling outputs like LEDs and motors.',
    image: '/Logo Main.png',
    gradient: 'from-blue-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'Cpu'
  },
  {
    id: 'breadboard',
    name: 'Solderless Breadboard',
    category: 'Core',
    description: 'Reusable prototyping board for temporary circuit building.',
    functionality: 'Allows quick connection of components and jumper wires without soldering, establishing power rails and pin rows.',
    image: '/Logo Main.png',
    gradient: 'from-emerald-600/30 to-teal-500/30',
    accentColor: '#49F996',
    iconName: 'Grid'
  },
  {
    id: 'resistor',
    name: 'Carbon Film Resistor',
    category: 'Core',
    description: 'Passive component that limits electric current flow in circuits.',
    functionality: 'Protects sensitive components like LEDs from excessive current and forms voltage dividers for analog readings.',
    image: '/Logo Main.png',
    gradient: 'from-amber-600/30 to-orange-500/30',
    accentColor: '#FC904F',
    iconName: 'Activity'
  },
  {
    id: 'jumper-wires',
    name: 'Jumper Wires Set',
    category: 'Core',
    description: 'Flexible connecting wires with pin headers for breadboards.',
    functionality: 'Establishes electrical connections between the Arduino pins, breadboard nodes, and peripheral components.',
    image: '/Logo Main.png',
    gradient: 'from-purple-600/30 to-blue-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Zap'
  },
  {
    id: 'led-red',
    name: '5mm LED (Light Emitting Diode)',
    category: 'Output',
    description: 'Semiconductor light source that emits light when current flows.',
    functionality: 'Provides visual indicators or status feedback for digital output pins on the Arduino.',
    image: '/Logo Main.png',
    gradient: 'from-rose-600/30 to-red-500/30',
    accentColor: '#FC904F',
    iconName: 'Lightbulb'
  },
  {
    id: 'piezo-buzzer',
    name: 'Piezoelectric Buzzer',
    category: 'Output',
    description: 'Audio signaling device that produces tones and beeps.',
    functionality: 'Generates sound alerts or play simple melodies using Pulse Width Modulation (PWM) audio frequencies.',
    image: '/Logo Main.png',
    gradient: 'from-orange-600/30 to-amber-500/30',
    accentColor: '#FC904F',
    iconName: 'Volume2'
  },
  {
    id: 'servo-motor',
    name: 'SG90 Micro Servo Motor',
    category: 'Output',
    description: 'Rotary actuator that allows precise angular position control.',
    functionality: 'Rotates to specific angles (0-180°) based on PWM control signals for robotic arms and steering.',
    image: '/Logo Main.png',
    gradient: 'from-blue-600/30 to-indigo-500/30',
    accentColor: '#35A2F4',
    iconName: 'RotateCw'
  },
  {
    id: 'dc-motor',
    name: '5V DC Motor',
    category: 'Output',
    description: 'Continuous rotation electric motor powered by direct current.',
    functionality: 'Drives wheels, fans, or mechanical systems when controlled via transistor or motor driver IC.',
    image: '/Logo Main.png',
    gradient: 'from-purple-600/30 to-pink-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Disc'
  },
  {
    id: 'lcd-display',
    name: '16x2 LCD Display Screen',
    category: 'Output',
    description: 'Liquid crystal display for alphanumeric text outputs.',
    functionality: 'Displays text messages, sensor data values, or menu interfaces driven by Arduino digital pins.',
    image: '/Logo Main.png',
    gradient: 'from-cyan-600/30 to-blue-500/30',
    accentColor: '#35A2F4',
    iconName: 'Monitor'
  },
  {
    id: 'push-button',
    name: 'Tactile Push Button',
    category: 'Input',
    description: 'Momentary switch that completes a circuit when pressed.',
    functionality: 'Sends digital HIGH/LOW signal to an Arduino input pin to trigger actions or count button presses.',
    image: '/Logo Main.png',
    gradient: 'from-emerald-600/30 to-green-500/30',
    accentColor: '#49F996',
    iconName: 'ToggleRight'
  },
  {
    id: 'potentiometer',
    name: '10k Rotary Potentiometer',
    category: 'Input',
    description: 'Variable resistor controlled by a manual rotary knob.',
    functionality: 'Provides a variable analog voltage signal (0-5V) to calibrate settings or control LED brightness.',
    image: '/Logo Main.png',
    gradient: 'from-blue-600/30 to-purple-500/30',
    accentColor: '#35A2F4',
    iconName: 'Sliders'
  },
  {
    id: 'joystick-module',
    name: 'Dual-Axis Thumb Joystick',
    category: 'Input',
    description: 'Analog 2-axis joystick module with integrated push button.',
    functionality: 'Outputs X and Y analog voltage coordinates plus a Z-axis digital click for game controllers.',
    image: '/Logo Main.png',
    gradient: 'from-purple-600/30 to-indigo-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Gamepad2'
  },
  {
    id: 'ultrasonic-sensor',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors',
    description: 'Non-contact distance measuring sensor using sound waves.',
    functionality: 'Emits high frequency sound pulses to measure distance to obstacles ranging from 2cm to 400cm.',
    image: '/Logo Main.png',
    gradient: 'from-cyan-600/30 to-emerald-500/30',
    accentColor: '#49F996',
    iconName: 'Radio'
  },
  {
    id: 'ir-sensor',
    name: 'IR Obstacle Avoidance Sensor',
    category: 'Sensors',
    description: 'Infrared transmitter and receiver pair for proximity detection.',
    functionality: 'Detects presence of nearby objects or line tracks by bouncing IR light off surfaces.',
    image: '/Logo Main.png',
    gradient: 'from-red-600/30 to-amber-500/30',
    accentColor: '#FC904F',
    iconName: 'Eye'
  },
  {
    id: 'dht11-sensor',
    name: 'DHT11 Temperature & Humidity Sensor',
    category: 'Sensors',
    description: 'Digital sensor module for environmental climate monitoring.',
    functionality: 'Measures ambient temperature (°C) and relative humidity (%) via a calibrated single-wire digital output.',
    image: '/Logo Main.png',
    gradient: 'from-teal-600/30 to-blue-500/30',
    accentColor: '#35A2F4',
    iconName: 'Thermometer'
  }
];
