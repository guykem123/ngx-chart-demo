import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScrollerItem } from '../models/scrollerItem';

@Component({
  selector: 'app-scroller-list',
  templateUrl: './scroller-list.component.html',
  styleUrls: ['./scroller-list.component.css']
})
export class ScrollerListComponent implements OnInit {

  @Input() scrollItems: ScrollerItem[];
  @Output() selectItemEvent: EventEmitter<ScrollerItem> = new EventEmitter<ScrollerItem>()
  longPressLeft: any
  longPressRigth: any
  isFirstScroll: boolean

  constructor() {
  }

  //left actions
  mouseUpLeft() {
    clearInterval(this.longPressLeft)
    this.isFirstScroll = true
  }
  mouseDownLeft(scrollList) {
    this.isFirstScroll = false
    this.longPressLeft = setInterval(() => { this.moveLeft(scrollList) }, 20)
  }

  //right actions
  mouseUpRight() {
    clearInterval(this.longPressRigth)
    this.isFirstScroll = true
  }
  mouseDownRight(scrollList) {
    this.isFirstScroll = false
    this.longPressRigth = setInterval(() => { this.moveRight(scrollList) }, 20)
  }

  private moveLeft(scrollList) {
    if (this.isFirstScroll)
      scrollList.scrollLeft -= 4
    else
      scrollList.scrollLeft -= 10
  }

  private moveRight(scrollList) {
    if (this.isFirstScroll)
      scrollList.scrollLeft += 4
    else
      scrollList.scrollLeft += 10
  }


  ngOnInit() {
  }

  onSelectItem(item: ScrollerItem) {
    this.selectItemEvent.emit(item)
  }

}