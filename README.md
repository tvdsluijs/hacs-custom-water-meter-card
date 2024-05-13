# Custom Water Meter Card for Home Assistant

The Custom Water Meter Card is a Lovelace UI card designed for Home Assistant. It visually represents water usage data, styled to mimic the appearance of a mechanical water meter, providing an aesthetic and functional display.

## Features

- **Aesthetic Display**: Styled to look like traditional mechanical water meters.
- **Color-coded Sections**: Separate colors for thousands (black background with white text) and liters (red background with white text).
- **Customizable and Configurable**: Easily adapt the card to display data from any water meter sensor in Home Assistant.

## Installation

To install the Custom Water Meter Card, you need to have Home Assistant running with HACS (Home Assistant Community Store) installed.

### Adding the Card to HACS

1. Open HACS in the Home Assistant sidebar.
2. Navigate to "Frontend" and then press the plus button to add this repository.
3. Enter the repository URL: `https://github.com/theo/hacs-custom-water-meter-card`
4. Select the category as "Lovelace" and add it.

### Installing the Card

After adding the repository in HACS:

1. Find the Custom Water Meter Card in the list of plugins.
2. Click "Install".
3. HACS will handle the download and installation.

### Using the Card in Home Assistant

After installation, you need to add the card to your Lovelace dashboard:

```yaml
type: "custom:custom-water-meter-card"
entity: sensor.water_meter
```

Replace `sensor.water_meter` with the entity ID of your water meter sensor.

## Configuration

Here's an example of basic configuration:

```yaml
type: "custom:custom-water-meter-card"
entity: sensor.water_meter
```

Make sure your sensor outputs data in the format `xxxxx,yyy`, where `xxxxx` represents thousands of liters, and `yyy` represents liters.

## Development

This card is open-source and you are welcome to contribute to its development. Visit the GitHub repository to check out the code and submit pull requests.

## Issues and Support

If you encounter any problems or have suggestions, please file an issue on the GitHub repository:
[Issue Tracker](https://github.com/tvdsluijs/hacs-custom-water-meter-card/issues)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About the Author

**Theo** - a passionate developer interested in home automation and sustainable technologies. For more about my projects, visit [my website](https://itheo.tech).

---

I hope you enjoy using the Custom Water Meter Card in your Home Assistant setup! If you find it useful, please consider leaving a star on the GitHub repository, or sponsor me on GitHub Sponsors.

Thank you! 🌟
