import {DvLinkTypes} from '../enums/DvLinkTypes.enum';

export const DvLinkColors: { [key in DvLinkTypes]: string } = {
  [DvLinkTypes.GitHub]: '#181717',
  [DvLinkTypes.FrontendMentor]: '#3D3D3D',
  [DvLinkTypes.Twitter]: '#1DA1F2',
  [DvLinkTypes.LinkedIn]: '#0077B5',
  [DvLinkTypes.YouTube]: '#FF0000',
  [DvLinkTypes.Facebook]: '#1877F2',
  [DvLinkTypes.Twitch]: '#9146FF',
  [DvLinkTypes.DevTo]: '#0A0A0A',
  [DvLinkTypes.Codewars]: '#AD2C27',
  [DvLinkTypes.Codepen]: '#000000',
  [DvLinkTypes.FreeCodeCamp]: '#006400',
  [DvLinkTypes.GitLab]: '#FCA121',
  [DvLinkTypes.Hashnode]: '#2962FF',
  [DvLinkTypes.StackOverflow]: '#F48024',
};
