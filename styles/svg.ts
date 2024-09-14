import css from 'styled-jsx/css';

export default css.global`
svg {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    color: white;
}

.spotify-title {
    vertical-align: middle;
    font-size: 16px;
}

.spotify-icon {
    margin-right: 10px;
}

.spotify-icon > img {
    padding-bottom: 0px;
}

a.a-spotify:hover {
    color: #1db954 !important;
}

.ellipsis-overflow {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ant-list-bordered {
    border: initial;
}

.ant-list {
    font-size: 0.8rem;
}

.ant-list-item-meta-avatar {
    align-self: center;
}

.ant-list-item-meta-title {
    font-size: 0.8rem;
    margin-bottom: 0px !important;
}

.ant-list-item-meta-description {
    font-size: 0.8rem;
}

.track-item {
    padding: 8px 12px !important;
}

.timestamp {
    font-size: 0.7rem;
    margin-left: 5px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
    .spotify-title {
        font-size: 14px;
    }

    .spotify-icon {
        margin-right: 8px;
    }

    .ant-list {
        font-size: 0.85rem;
    }

    .ant-list-item-meta-title,
    .ant-list-item-meta-description {
        font-size: 0.85rem;
    }
}

@media (max-width: 992px) {
    .spotify-title {
        font-size: 12px;
    }

    .spotify-icon {
        margin-right: 6px;
    }

    .ant-list {
        font-size: 0.9rem;
    }

    .ant-list-item-meta-title,
    .ant-list-item-meta-description {
        font-size: 0.9rem;
    }

    .track-item {
        padding: 6px 10px !important;
    }

    .timestamp {
        font-size: 0.65rem;
    }
}

@media (max-width: 768px) {
    .spotify-title {
        font-size: 10px;
    }

    .spotify-icon {
        margin-right: 4px;
    }

    .ant-list {
        font-size: 1rem;
    }

    .ant-list-item-meta-title,
    .ant-list-item-meta-description {
        font-size: 1rem;
    }

    .track-item {
        padding: 4px 8px !important;
    }

    .timestamp {
        font-size: 0.6rem;
    }
}

@media (max-width: 576px) {
    .spotify-title {
        font-size: 8px;
    }

    .spotify-icon {
        display: none; /* Hide icon on very small screens */
    }

    .ant-list {
        font-size: 1.2rem;
    }

    .ant-list-item-meta-title,
    .ant-list-item-meta-description {
        font-size: 1.2rem;
    }

    .track-item {
        padding: 2px 6px !important;
    }

    .timestamp {
        font-size: 0.55rem;
    }
}
`;
