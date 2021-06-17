import { Arguments, CommandModule } from "yargs";
import { ActionValidate, ActionValidateOptions } from "../../actions/validate";
import { GlobalArgv } from "../options";

export interface ValidateCommandOptions extends GlobalArgv {}

export const ValidateCommand: CommandModule<{}, ValidateCommandOptions> = {
  command: "validate",
  describe: "Validate existing changelogs against the specified format",
  handler: (argv: Arguments<ValidateCommandOptions>) => {
    const options: ActionValidateOptions = {
      dir: argv.logsDir,
      format: argv.format,
    };

    ActionValidate(options);
  },
};
