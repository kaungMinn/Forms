import SimpleCard from "../../../../Components/Cards/SimpleCard";
import { DefaultThemeTypes } from "../../_types";

type ThemeCardsType = {
  handleTheme: (theme: DefaultThemeTypes) => void;
  themes: DefaultThemeTypes[];
  primaryColor: string[];
  selectedCardId: number;
};

const ThemeCards = (props: ThemeCardsType) => {
  const { themes, handleTheme, selectedCardId, primaryColor } = props;
  const [primaryBg, primaryText, selectedBg, selectedText] = primaryColor;

  const isSelected = (id: number) => {
    if (selectedCardId === id) return true;
    return false;
  };

  return (
    <>
      {themes.map((theme) => {
        const { id, name, detailLogo } = theme;
        return (
          <div key={id}>
            <SimpleCard
              label={name}
              logo={detailLogo}
              handleClick={() => handleTheme(theme)}
              bgColor={isSelected(id) ? selectedBg : primaryBg}
              textColor={isSelected(id) ? selectedText : primaryText}
            />
          </div>
        );
      })}
    </>
  );
};

export default ThemeCards;
