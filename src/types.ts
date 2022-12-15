import { ActionConfig, EntityConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'placecard-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface PlacecardCardConfig extends LovelaceCardConfig {
  type: string;
  header?: any;
  show_warning?: boolean;
  show_error?: boolean;
  debug?: boolean;
  rowSize?: number;
  test_gui?: boolean;
  color?: string;
  entities: PlacecardCardEntityConfig[];
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface PlacecardCardEntityConfig extends EntityConfig {
  domain: any;
  attribute?: any;
  error?: any;
  toggle?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  size?: number;
  hide_entity_name?: boolean ;
}
