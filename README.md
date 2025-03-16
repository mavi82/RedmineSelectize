# Redmine Selectize Plugin

## Description

The **Redmine Selectize Plugin** is an extension for Redmine that enhances the user experience when interacting with `select` fields (dropdowns) by integrating the powerful **Selectize** library. Selectize provides advanced dropdown functionalities, including search, autocomplete, and multi-select capabilities, improving usability and efficiency.

With this plugin, all `select` tags in Redmine are automatically converted into modern, searchable, and dynamic dropdowns, making it easier to navigate long lists and select multiple options where applicable.

## Features

- **Quick Search:** `select` fields now include a search bar, enabling faster selection in long lists.
- **Multi-Select:** Supports selecting multiple options when applicable.
- **Improved User Experience:** Provides a cleaner and more modern interface with customizable styles.
- **Redmine Compatibility:** Seamlessly integrates with Redmine's existing UI.

## Installation

1. **Download and install the plugin:**

   - Clone the repository into the `plugins` folder of Redmine:
     ```bash
     git clone https://github.com/mavi82/RedmineSelectize.git redmine_selectize
     ```

2. **Run the database migration (if needed):**

   ```bash
   bundle exec rake redmine:plugins:migrate RAILS_ENV=production
   ```

3. **Restart Redmine** to apply the changes.

## Configuration

Once installed, the plugin requires no additional configuration. All `select` tags in Redmine will automatically be converted into Selectize elements without needing to modify Redmine or plugin source code.

## Compatibility

- **Redmine:** Compatible with versions 4.x and higher.
- **Selectize:** Version 0.15.2.

## Contributing

Contributions are welcome! If you have suggestions, want to report bugs, or wish to improve the code, feel free to open a pull request or submit an issue on our GitHub repository.

## License

This plugin is released under the **MIT** license.

