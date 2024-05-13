# Custom Water Meter Card

The Custom Water Meter Card for Home Assistant provides a visual representation of water usage, designed to resemble a mechanical water meter. This card is perfect for anyone looking to integrate their water meter readings into their Home Assistant dashboard with a visually appealing and easy-to-read format.

## Features

- **Realistic Design**: Mimics the look of a traditional mechanical water meter.
- **Easy to Read**: Displays thousands of liters and liters using distinct color codes.
- **Customizable**: Easy to integrate with any entity that provides water meter readings.

## Installation

### Step 1: Add Repository to HACS

1. Navigate to HACS in the Home Assistant sidebar.
2. Go to "Frontend" section.
3. Tap the plus button to add a new repository.
4. Enter the URL of this repository: `https://github.com/tvdsluijs/custom-water-meter-card`
5. Choose the category "Lovelace".

### Step 2: Install the Card

After adding the repository, you can install the Custom Water Meter Card:

1. Find the Custom Water Meter Card in the list of new cards.
2. Click "Install".
3. Restart Home Assistant.

### Step 3: Add to Lovelace

Add the card to your Lovelace dashboard by editing your dashboard:

```yaml
type: "custom:custom-water-meter-card"
entity: sensor.water_meter
```

Replace `sensor.water_meter` with your actual water meter sensor entity ID.

## Configuration

Here is a basic example of the configuration for the card:

```yaml
type: "custom:custom-water-meter-card"
entity: sensor.water_meter
```

Make sure you have a sensor that outputs the format `xxxxx,yyy` where `xxxxx` is the total liters in thousands and `yyy` is the remaining liters.

## Support

If you encounter any issues or require assistance, please raise an issue on the project's GitHub repository: [Issue Tracker](https://github.com/theo/hacs-custom-water-meter-card/issues)

## More Information

For more information and updates, visit the project's GitHub repository: [Custom Water Meter Card GitHub](https://github.com/tvdsluijs/hacs-custom-water-meter-card)

---

**Author**: Theo van der Sluijs
**License**: MIT
