export interface ArduinoComponent {
  id: string;
  name: string;
  category: 'Microcontrollers & Boards' | 'Sensors & Modules' | 'Inputs & Controls' | 'Motors & Drivers' | 'Power & Passives' | 'Displays & Systems';
  description: string;
  functionality: string;
  image: string;
  gradient: string;
  accentColor: string;
  iconName: string;
}

export const ARDUINO_COMPONENTS: ArduinoComponent[] = [
  // --- Microcontrollers & Boards ---
  {
    id: 'arduino-uno-r3',
    name: 'Arduino Uno R3',
    category: 'Microcontrollers & Boards',
    description: 'The flagship microcontroller board powered by ATmega328P.',
    functionality: 'Acts as the primary brain of your electronics projects, processing inputs from sensors and driving motors, displays, and actuators.',
    image: '/targets/arduino-uno-r3.jpg',
    gradient: 'from-blue-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'Cpu'
  },
  {
    id: 'arduino-nano',
    name: 'Arduino Nano',
    category: 'Microcontrollers & Boards',
    description: 'Compact, breadboard-friendly microcontroller board based on ATmega328P.',
    functionality: 'Provides full Arduino Uno capability in a miniature form factor designed for breadboard prototyping and small space projects.',
    image: '/targets/arduino-nano.jpg',
    gradient: 'from-blue-600/30 to-indigo-500/30',
    accentColor: '#35A2F4',
    iconName: 'Cpu'
  },
  {
    id: 'arduino-r4-wifi',
    name: 'Arduino Uno R4 WiFi',
    category: 'Microcontrollers & Boards',
    description: 'Next-gen 32-bit Renesas RA4M1 board with integrated Wi-Fi & Bluetooth.',
    functionality: 'Delivers enhanced processing power, 12x8 LED matrix, and built-in wireless connectivity for IoT and cloud applications.',
    image: '/targets/arduino-r4-wifi.jpg',
    gradient: 'from-cyan-600/30 to-blue-500/30',
    accentColor: '#35A2F4',
    iconName: 'Wifi'
  },
  {
    id: 'esp32-dev-board',
    name: 'ESP32 Development Board',
    category: 'Microcontrollers & Boards',
    description: 'High-performance dual-core 32-bit MCU with 2.4 GHz Wi-Fi & Bluetooth 4.2.',
    functionality: 'Ideal for IoT smart home automation, high-speed networking, and wireless sensor nodes with low power consumption.',
    image: '/targets/esp32-dev-board.jpg',
    gradient: 'from-purple-600/30 to-pink-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Radio'
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi Single Board Computer',
    category: 'Microcontrollers & Boards',
    description: 'Credit-card sized ARM computer running full desktop Linux systems.',
    functionality: 'Executes complex computing tasks, computer vision algorithms, web hosting, and advanced robotics controller software.',
    image: '/targets/raspberry-pi.jpg',
    gradient: 'from-rose-600/30 to-red-500/30',
    accentColor: '#FC904F',
    iconName: 'Server'
  },
  {
    id: 'raspberry-pi-3',
    name: 'Raspberry Pi 3 Model B',
    category: 'Microcontrollers & Boards',
    description: 'Quad-core 1.2GHz 64-bit SBC with onboard Wi-Fi, BLE, and HDMI output.',
    functionality: 'Handles multimedia processing, IoT gateways, robotics hubs, and multi-threaded embedded Python scripts.',
    image: '/targets/raspberry-pi-3.jpg',
    gradient: 'from-red-600/30 to-orange-500/30',
    accentColor: '#FC904F',
    iconName: 'Server'
  },
  {
    id: 'raspberry-pi-zero',
    name: 'Raspberry Pi Zero',
    category: 'Microcontrollers & Boards',
    description: 'Ultra-small Linux single-board computer for embedded IoT applications.',
    functionality: 'Provides compact 1GHz single-core compute power for space-constrained wearable gadgets and lightweight servers.',
    image: '/targets/raspberry-pi-zero.jpg',
    gradient: 'from-amber-600/30 to-yellow-500/30',
    accentColor: '#FC904F',
    iconName: 'Cpu'
  },

  // --- Sensors & Modules ---
  {
    id: 'dht11-sensor',
    name: 'DHT11 Temperature & Humidity Sensor',
    category: 'Sensors & Modules',
    description: 'Digital sensor module for measuring ambient temperature and humidity.',
    functionality: 'Outputs pre-calibrated single-wire digital signals to monitor environmental conditions in weather stations and HVAC systems.',
    image: '/targets/dht11-sensor.jpg',
    gradient: 'from-teal-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'Thermometer'
  },
  {
    id: 'hc-sr04-ultrasonic-sensor',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors & Modules',
    description: 'Non-contact ultrasonic rangefinder measuring distances from 2cm to 400cm.',
    functionality: 'Sends high-frequency 40kHz sound pulses and measures echo timing to detect obstacles for autonomous navigation.',
    image: '/targets/hc-sr04-ultrasonic-sensor.jpg',
    gradient: 'from-cyan-600/30 to-emerald-500/30',
    accentColor: '#49F996',
    iconName: 'Radio'
  },
  {
    id: 'ir-sensor',
    name: 'IR Obstacle Avoidance Sensor',
    category: 'Sensors & Modules',
    description: 'Infrared transmitter & receiver module for proximity and line tracking.',
    functionality: 'Emits IR light and measures reflected intensity to detect close-range objects or follow black track lines on white surfaces.',
    image: '/targets/ir-sensor.jpg',
    gradient: 'from-red-600/30 to-amber-500/30',
    accentColor: '#FC904F',
    iconName: 'Eye'
  },
  {
    id: 'mpu-6050-module',
    name: 'MPU-6050 6-Axis Gyro & Accelerometer',
    category: 'Sensors & Modules',
    description: 'IMU module combining 3-axis gyroscope and 3-axis accelerometer.',
    functionality: 'Measures rotational velocity and linear acceleration over I2C to calculate pitch, roll, and motion orientation for drones and self-balancing robots.',
    image: '/targets/mpu-6050-module.jpg',
    gradient: 'from-purple-600/30 to-blue-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Compass'
  },
  {
    id: 'water-level-sensor',
    name: 'Water Level Depth Sensor',
    category: 'Sensors & Modules',
    description: 'Analog liquid level sensor with parallel conductive trace lines.',
    functionality: 'Produces analog voltage proportional to immersion depth for rainfall detection, liquid tank level alarms, and soil moisture sensing.',
    image: '/targets/water-level-sensor.jpg',
    gradient: 'from-blue-600/30 to-teal-500/30',
    accentColor: '#35A2F4',
    iconName: 'Droplets'
  },

  // --- Inputs & Controls ---
  {
    id: 'button',
    name: 'Tactile Push Button Switch',
    category: 'Inputs & Controls',
    description: 'Momentary tactile switch that completes electrical contact when pressed.',
    functionality: 'Sends immediate digital HIGH/LOW signals to digital input pins for user input triggers, mode switches, and pulse counters.',
    image: '/targets/button.jpg',
    gradient: 'from-emerald-600/30 to-green-500/30',
    accentColor: '#49F996',
    iconName: 'ToggleRight'
  },
  {
    id: 'potentiometer',
    name: '10k Rotary Potentiometer',
    category: 'Inputs & Controls',
    description: '3-pin manual variable resistor controlled via a smooth turning knob.',
    functionality: 'Divides 5V input voltage to deliver continuous 0-1023 analog signals for dimming LEDs, adjusting motor speeds, and setting thresholds.',
    image: '/targets/potentiometer.jpg',
    gradient: 'from-blue-600/30 to-purple-500/30',
    accentColor: '#35A2F4',
    iconName: 'Sliders'
  },
  {
    id: 'joystick-module',
    name: 'Dual-Axis Thumb Joystick Module',
    category: 'Inputs & Controls',
    description: '2-axis analog directional stick with built-in push button switch.',
    functionality: 'Outputs dual X/Y potentiometric voltage readings along with a Z-axis digital push click for video game and pan-tilt controllers.',
    image: '/targets/joystick-module.jpg',
    gradient: 'from-indigo-600/30 to-purple-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Gamepad2'
  },

  // --- Motors & Drivers ---
  {
    id: 'servo-motor',
    name: 'SG90 Micro Servo Motor',
    category: 'Motors & Drivers',
    description: 'Lightweight rotary actuator with 180° precise angular position control.',
    functionality: 'Uses PWM control signals to position internal gears and horn arms accurately for robotic joints, steering, and door latches.',
    image: '/targets/servo-motor.jpg',
    gradient: 'from-blue-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'RotateCw'
  },
  {
    id: 'stepper-motor',
    name: '28BYJ-48 Stepper Motor',
    category: 'Motors & Drivers',
    description: '4-phase 5V DC geared step motor for precise step angle rotation.',
    functionality: 'Rotates in fixed discrete micro-steps for high precision positioning in 3D printers, CNC tables, and robotic arms.',
    image: '/targets/stepper-motor.jpg',
    gradient: 'from-amber-600/30 to-orange-500/30',
    accentColor: '#FC904F',
    iconName: 'Cog'
  },
  {
    id: 'l298n-motor-driver',
    name: 'L298N Dual H-Bridge Motor Driver',
    category: 'Motors & Drivers',
    description: 'High-current dual H-bridge driver module for DC & stepper motors.',
    functionality: 'Controls rotation direction and speed (via PWM) of two high-power DC motors or one stepper motor using isolated microcontroller logic.',
    image: '/targets/l298n-motor-driver.jpg',
    gradient: 'from-red-600/30 to-rose-500/30',
    accentColor: '#FC904F',
    iconName: 'Zap'
  },

  // --- Power & Passives ---
  {
    id: '9v-battery',
    name: '9V Heavy Duty Battery',
    category: 'Power & Passives',
    description: 'Standard 9-Volt DC battery power source for portable hardware setups.',
    functionality: 'Provides mobile unregulated power via barrel jack or VIN pins to microcontrollers and field-deployed electronic circuits.',
    image: '/targets/9v-battery.jpg',
    gradient: 'from-yellow-600/30 to-amber-500/30',
    accentColor: '#FC904F',
    iconName: 'BatteryCharging'
  },
  {
    id: 'breadboard',
    name: 'Solderless Prototyping Breadboard',
    category: 'Power & Passives',
    description: 'Reusable 830-point connection board for temporary electronic testing.',
    functionality: 'Interconnects components and power rails via spring-clip terminal rows without requiring permanent solder joints.',
    image: '/targets/breadboard.jpg',
    gradient: 'from-emerald-600/30 to-teal-500/30',
    accentColor: '#49F996',
    iconName: 'Grid'
  },
  {
    id: 'jumper-wire',
    name: 'Jumper Wires Set',
    category: 'Power & Passives',
    description: 'Multi-color flexible connection cables with male & female pin headers.',
    functionality: 'Routes power, ground, and data signals quickly between Arduino pins, sensors, breadboards, and expansion modules.',
    image: '/targets/jumper-wire.jpg',
    gradient: 'from-purple-600/30 to-blue-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Activity'
  },
  {
    id: 'resistor',
    name: 'Carbon Film Resistor',
    category: 'Power & Passives',
    description: 'Passive component that limits electric current flow in circuits.',
    functionality: 'Protects sensitive components like LEDs from excessive current and forms pull-up/pull-down voltage dividers for digital inputs.',
    image: '/targets/resistor.jpg',
    gradient: 'from-amber-600/30 to-orange-500/30',
    accentColor: '#FC904F',
    iconName: 'Activity'
  },
  {
    id: 'cylindric-capacitor',
    name: 'Electrolytic Cylindrical Capacitor',
    category: 'Power & Passives',
    description: 'Polarized energy storage element for power supply decoupling and filtering.',
    functionality: 'Smooths voltage ripples, stabilizes power rails during sudden current spikes, and filters AC noise out of DC signals.',
    image: '/targets/cylindric-capacitor.jpg',
    gradient: 'from-blue-600/30 to-indigo-500/30',
    accentColor: '#35A2F4',
    iconName: 'Zap'
  },
  {
    id: 'single-inline-package',
    name: 'SIP Header Pin Strip',
    category: 'Power & Passives',
    description: 'Single In-line Package (SIP) breakable male/female pin header strip.',
    functionality: 'Provides modular socket connections for connecting add-on boards, sensors, and jumper wires to PCB boards.',
    image: '/targets/single-inline-package.jpg',
    gradient: 'from-slate-600/30 to-zinc-500/30',
    accentColor: '#8A9BB5',
    iconName: 'Layers'
  },
  {
    id: 'to-220-package',
    name: 'TO-220 Transistor / Voltage Regulator',
    category: 'Power & Passives',
    description: 'High-power discrete semiconductor component package with tab heatsink.',
    functionality: 'Houses high-current MOSFETs, BJTs, and linear voltage regulators (e.g. LM7805) with thermal dissipating metal tabs.',
    image: '/targets/to-220-package.jpg',
    gradient: 'from-teal-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'Cpu'
  },
  {
    id: 'usb-cable',
    name: 'USB Type-A to Type-B Prototyping Cable',
    category: 'Power & Passives',
    description: 'Heavy-duty shielded USB data and power cable for microcontroller programming.',
    functionality: 'Transmits compiled code hex files from your PC to the Arduino board while supplying steady 5V bus power.',
    image: '/targets/usb-cable.jpg',
    gradient: 'from-blue-600/30 to-cyan-500/30',
    accentColor: '#35A2F4',
    iconName: 'Cable'
  },

  // --- Displays & Systems ---
  {
    id: 'lcd-display',
    name: '16x2 Alphanumeric LCD Display',
    category: 'Displays & Systems',
    description: 'Liquid crystal display screen capable of rendering 32 ASCII characters.',
    functionality: 'Displays real-time sensor readings, menu systems, and diagnostic status messages driven by HD44780 controller logic.',
    image: '/targets/lcd-display.jpg',
    gradient: 'from-cyan-600/30 to-blue-500/30',
    accentColor: '#35A2F4',
    iconName: 'Monitor'
  },
  {
    id: 'rgb-module',
    name: '3-Color RGB LED Module',
    category: 'Displays & Systems',
    description: 'Multi-color LED module containing Red, Green, and Blue diodes in one housing.',
    functionality: 'Blends PWM signals across 3 color channels to generate thousands of custom status color signals and lighting effects.',
    image: '/targets/rgb-module.jpg',
    gradient: 'from-purple-600/30 to-pink-500/30',
    accentColor: '#9B5FF5',
    iconName: 'Sparkles'
  },
  {
    id: 'rc-car',
    name: 'Smart Robot RC Car Chassis Kit',
    category: 'Displays & Systems',
    description: '2WD/4WD robotic vehicle platform with gear motors and wheel chassis.',
    functionality: 'Serves as an integrated mobile robotics platform for line-following, obstacle avoidance, and remote bluetooth control.',
    image: '/targets/rc-car.jpg',
    gradient: 'from-emerald-600/30 to-cyan-500/30',
    accentColor: '#49F996',
    iconName: 'Car'
  }
];
