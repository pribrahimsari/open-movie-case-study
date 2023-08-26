import { Box, IconButton, Link, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import { FOOTER_URLS } from "src/constants/constants.ts";

const Footer = () => {
  const handleClick = (to: "github" | "linkedin" | "portfolio") => {
    const url = FOOTER_URLS[to];
    window.open(url, "_blank");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2} sx={{ marginTop: 2 }}>
      <Typography variant="body2">
        Created with ❤️ by{" "}
        <Link href={FOOTER_URLS.portfolio} target="_blank" rel="noopener">
          Ibrahim SARI
        </Link>
      </Typography>

      <Box>|</Box>

      <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
        <Tooltip title="Portfolio Website on new tab">
          <IconButton size="small" color="primary" onClick={() => handleClick("portfolio")}>
            <PublicIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github profile on new tab">
          <IconButton size="small" color="primary" onClick={() => handleClick("github")}>
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn profile on new tab">
          <IconButton size="small" color="primary" onClick={() => handleClick("linkedin")}>
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Footer;
