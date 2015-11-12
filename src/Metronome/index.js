import React, { Component } from 'react';
import { Sound } from './Sound';
import { TempoControl } from './TempoControl';
import { StartStop } from './StartStop';

export class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: 60,
      isPlaying: false,
      click: null,
    };
  }

  handleToggle() {
    if (this.state.isPlaying) {
      this.handleStop();
    } else {
      this.handleStart();
    }
  }

  handleStart() {
    const delay = 60000 / this.state.tempo;
    this.interval = setInterval(() => this.playClick(), delay);
    this.setState({ isPlaying: true });
  }

  handleStop() {
    clearInterval(this.interval);
    this.setState({ isPlaying: false });
  }

  handleSetTempo(tempo) {
    this.setState({ tempo }, () => {
      if (this.state.isPlaying) {
	this.handleStop();
	this.handleStart();
      }
    });
  }

  playClick() {
    this.setState({
      click: !this.state.click,
    });
  }

  render() {
    const { click, isPlaying } = this.state;
    return (
      <div>
        <TempoControl
          handleChange={this.handleSetTempo.bind(this)}
          value={this.state.tempo}
        />
        <StartStop isPlaying={isPlaying} handleToggle={this.handleToggle.bind(this)} />
        <Sound click={click} handleFinish={this.playClick.bind(this)} />
      </div>
    );
  }
}
