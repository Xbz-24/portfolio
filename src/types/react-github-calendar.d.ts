declare module 'react-github-calendar' {
  import { ComponentType } from 'react';

  export interface ThemeInput {
    [key: string]: string[];
  }

  interface GitHubCalendarProps {
    username: string;
    theme?: ThemeInput;
  }

  const GitHubCalendar: ComponentType<GitHubCalendarProps>;
  export default GitHubCalendar;
}
