// Detail Page Interface
export interface IVideo {
  id?: string;
  video: IVideoInfo;
}

export interface IVideoInfo {
  etage?: string;
  id: string;
  kind?: string;
  snippet: ISnippet;
}

export interface IThumbnails {
  medium: {
    url: string;
  };
}

export interface ISnippet {
  title: string;
  channelTitle: string;
  description?: string;
  thumbnails?: IThumbnails;
}

// SearchBar Component Interface

export interface ISearch {
  (query: string): void;
}

export interface ILogoClick {
  (): void;
}

export interface INavEventHandler {
  onSearch: ISearch;
  onLogoClick: ILogoClick;
}

// VideoItem Component Interface

export interface IVideoItem {
  video: IVideoInfo;
  onVideoClick: () => void;
  display: boolean | null;
}

// VideoList Component Interface

export interface IVideoList {
  videos: IVideo[];
  onVideoClick: () => void;
}
