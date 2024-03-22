import React, { useRef } from 'react';
import './HorizontalScroll.css'; // Import CSS file for styling

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="horizontal-scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        {'<'}
      </button>
      <div className="horizontal-scroll-content" ref={scrollRef}>
        {/* Your content goes here */}
        <div className="slider">
        <table>
            <tr>
            <th>Question #</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Question 4</th>
            <th>Question 5</th>
            <th>Question 6</th>
            <th>Question 7</th>
            <th>Question 8</th>
            <th>Question 9</th>
            <th>Question 10</th>
            <th>Question 11</th>
            <th>Question 12</th>
            <th>Question 13</th>
            <th>Question 14</th>
            <th>Question 15</th>
            <th>Question 16</th>
            <th>Question 17</th>
            <th>Question 18</th>
            <th>Question 19</th>
            <th>Question 20</th>
            <th>Question 21</th>
            <th>Question 22</th>
            <th>Question 23</th>
            <th>Question 24</th>
            <th>Question 25</th>
            </tr>

            <tr>
            <td>Question Type</td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            <td>
                <select>
                <option>FTV-First Words</option>
                <option>FTV-Quote</option>
                <option>Location</option>
                <option>Reference</option>
                <option>Regular</option>
                </select>
            </td>
            </tr>

            <tr>
            <td>Player Name</td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            <td>
                <select>
                <option>Player 1</option>

                <option>Player 2</option>

                <option>Player 3</option>

                <option>Player 4</option>

                <option>Player 5</option>

                <option>Player 6</option>

                <option>Player 7</option>
                </select>
            </td>
            </tr>

        <tr>
        <td>Points</td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        <td>
            <select>
            <option>+10</option>
            <option>-10</option>
            </select>
        </td>
        </tr>
    </table>
  </div>
        {/* Add more items as needed */}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        {'>'}
      </button>
    </div>
  );
};

export default HorizontalScroll;